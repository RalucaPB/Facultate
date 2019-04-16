#pragma once
#include<vector>
#include<algorithm>
#include<string>
#include"Disciplina.h"
#include"Validare.h"

using namespace std;

class Repository
{
private:
	vector<Disciplina> allDiscipline;
public:
	//constructor
	Repository() = default;
	//adaugare disciplina
	virtual void adaugareElement(const Disciplina& disciplina)
	{
		//verificam daca disciplina exista deja
		auto gasit = find_if(allDiscipline.begin(), allDiscipline.end(), [disciplina](const Disciplina& element) {
			return element.getDenumire() == disciplina.getDenumire();
		});
		//daca nu exista il adaugam
		if (gasit != allDiscipline.end())
		{
			throw contractException{ "Disciplina exista deja" };
		}
		allDiscipline.push_back(disciplina);
	}
	//returneaza o disciplina cautata dupa denumire si cadruDidactic
	Disciplina cautaElement(string denumire, string cadruDidactic)
	{
		auto gasit = find_if(allDiscipline.begin(), allDiscipline.end(), [&](const Disciplina& element) {
			return element.getDenumire() == denumire && element.getCadruDidactic() == cadruDidactic;
		});

		if (gasit == allDiscipline.end())
		{
			throw contractException{ "Disciplina nu exista " };
		}
		return *gasit;
	}
	//sterge o disciplina 
	virtual void stergeElement(const Disciplina& disciplina)
	{
		//verificam daca disciplina exista deja
		auto gasit = find_if(allDiscipline.begin(), allDiscipline.end(), [disciplina](const Disciplina& element) {
			return element.getDenumire() == disciplina.getDenumire();
		});
		if (gasit == allDiscipline.end())
		{
			throw contractException{ "Disciplina nu exista " };
		}
		//daca exista o stergem
		allDiscipline.erase(gasit);
	}
	//returneaza toate disciplinele
	const vector<Disciplina> getElemente() const
	{
		return allDiscipline;
	}
	virtual void updateElement( const Disciplina & newElement) 
	{
		auto oldElement = find_if(allDiscipline.begin(), allDiscipline.end(), [newElement](const Disciplina& element) {
			return element.getDenumire() == newElement.getDenumire();
		});
		if (oldElement == allDiscipline.end())throw contractException("nu exista!!!");
		*oldElement = newElement;
	}
};

class fileRepository : public Repository
{
private:
	string fileName;
	void loadFromFile();
	void writeToFile();
public:
	//constructor
	fileRepository(string fileName) : Repository(), fileName{ fileName }
	{
		loadFromFile();//incarcam datele din fisier
	}
	//adaugare disciplina
	void adaugareElement(const Disciplina& disciplina) override
	{
		Repository::adaugareElement(disciplina);
		writeToFile();
	}
	//sterge o disciplina
	void stergeElement(const Disciplina& disciplina) override
	{
		Repository::stergeElement(disciplina);
		writeToFile();
	}
	void updateElement(const Disciplina & newElement) override
	{
		Repository::updateElement(newElement);
		writeToFile();
	}
};

void testRepository();