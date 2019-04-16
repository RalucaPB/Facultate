#include"Repository.h"
#include <fstream>
#include <assert.h>

void fileRepository::loadFromFile()
{
	ifstream in(fileName);
	if (!in.is_open())
	{ //verify if the stream is opened		
		throw contractException("Unable to open file:");
	}
	while (!in.eof()) {
		string denumire;
		in >> denumire;
		int numarOre;
		in >> numarOre;
		string tip;
		in >> tip;
		string cadruDidactic;
		in >> cadruDidactic;

		if (in.eof())
		{	//nu am reusit sa citesc 
			break;
		}
		Disciplina disciplina{ denumire.c_str(),numarOre, tip.c_str(), cadruDidactic.c_str() };
		Repository::adaugareElement(disciplina);
	}
	in.close();
}


void fileRepository::writeToFile()
{
	ofstream out(fileName);
	if (!out.is_open())
	{ //verify if the stream is opened
		throw contractException("Unable to open file:");
	}
	for (auto& discipline : getElemente())
	{
		out << discipline.getDenumire();
		out << "\n";
		out << discipline.getNumarOre();
		out << "\n";
		out << discipline.getTip();
		out << "\n";
		out << discipline.getCadruDidactic();
		out << "\n";
	}
	out.close();
}

void testRepository() {
	std::ofstream out("testRepo.txt", std::ios::trunc);
	out.close();//creez un fisier gol
	fileRepository repository{ "testRepo.txt" };
	repository.adaugareElement(Disciplina{ "mate",6,"real","Gorcea" });
	try {
		repository.adaugareElement(Disciplina{ "mate",6,"real","Gorcea" });
		assert(false);
	}
	catch (contractException&) {
	}

	fileRepository repository2{ "testRepo.txt" };
	auto disciplina = repository2.cautaElement("mate", "Gorcea");
	assert(disciplina.getNumarOre() == 6);
	try {
		repository2.cautaElement("fizica", "Ion");
		assert(false);
	}
	catch (contractException&) {
	}
	repository2.stergeElement(Disciplina{ "mate",6,"real","Gorcea" });
	assert(repository2.getElemente().size() == 0);
	try {
		repository2.stergeElement(Disciplina{ "fizica",4,"real","Dan" });
		assert(false);
	}
	catch (contractException&) {
	}

	fileRepository repository3{ "testRepo.txt" };
	assert(repository3.getElemente().size() == 0);

}