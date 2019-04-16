#include "Controller.h"
#include <vector>
#include <algorithm>
#include <assert.h>
#include <iterator>
#include <memory>
#include "Undo.h"

void Controller::adaugareDisciplina(const string& denumire, int numarOre, const string& tip, const string& cadruDidactic)
{
	Disciplina disciplina{ denumire,numarOre,tip,cadruDidactic };
	repository.adaugareElement(disciplina);
	listaUndo.push_back(make_unique< undoForAdd >(disciplina, repository));



}
void Controller::stergeDisciplina(const Disciplina& disciplina)
{

	repository.stergeElement(disciplina);
	listaUndo.push_back(make_unique< undoForDelete >(disciplina, repository));
}

void Controller::doUndo()
{
	if (listaUndo.empty()) {
		throw contractException{ "Nu mai exista operatii" };
	}

	listaUndo.back()->undo();
	listaUndo.pop_back();
}
void Controller::modificaDisciplina( const string& denumireNoua,
	const int& numarOreNou, const string& tipNou, const string& cadruDidacticNou)
{


	Disciplina  disciplinaNoua{ denumireNoua, numarOreNou, tipNou, cadruDidacticNou };
	Disciplina disciplinaVeche = repository.cautaElement(denumireNoua, cadruDidacticNou);
	repository.updateElement( disciplinaNoua);
	listaUndo.push_back(make_unique< undoForUpdate>(disciplinaNoua, disciplinaVeche, repository));




}
vector<Disciplina> Controller::filtrareByNumarOre(const int& numarOre)
{
	vector <Disciplina> lista = getAllDiscipline();
	vector <Disciplina> listaFiltrata;

	copy_if(lista.begin(), lista.end(), back_inserter(listaFiltrata), [&](const Disciplina &product) {
		return product.getNumarOre() == numarOre;
	});
	return listaFiltrata;
}

vector<Disciplina> Controller::filtrareByCadruDidactic(const string& cadruDidactic)
{
	vector <Disciplina> lista = getAllDiscipline();
	vector <Disciplina> listaFiltrata;

	copy_if(lista.begin(), lista.end(), back_inserter(listaFiltrata), [&](const Disciplina &product) {
		return product.getCadruDidactic() == cadruDidactic;
	});
	return listaFiltrata;
}
struct byDisciplina1 {
	bool operator() (Disciplina disciplina1, Disciplina disciplina2) { return (disciplina1.getDenumire()<disciplina2.getDenumire()); }
} sortDenumire;
vector <Disciplina> Controller::sortareByDenumire()
{
	vector<Disciplina> lista = getAllDiscipline();

	sort(lista.begin(), lista.end(), sortDenumire);
	return lista;
}
struct byDisciplina {
	bool operator() (Disciplina disciplina1, Disciplina disciplina2) { return (disciplina1.getNumarOre()<disciplina2.getNumarOre()); }
} sortNumarOre;
vector <Disciplina> Controller::sortareByNumarOre()
{
	vector<Disciplina> lista = getAllDiscipline();

	sort(lista.begin(), lista.end(), sortNumarOre);
	return lista;
}
const vector<Disciplina>& Controller::addToContract(const string& denumire, int numarOre, const string& tip, const string& cadruDidactic)
{
	Disciplina disciplina = repository.cautaElement(denumire, cadruDidactic);
	contract.adaugareContract(disciplina);
	return contract.getContract();
}

const vector<Disciplina>& Controller::addRandom(int numar)
{
	contract.umpleContract(numar);
	return contract.getContract();
}

const vector<Disciplina>& Controller::golesteContract()
{
	contract.golesteContract();
	return contract.getContract();
}
const vector<Disciplina>& Controller::stergeContract(const Disciplina& disciplina)
{
	contract.stergeDinContract(disciplina);
	return contract.getContract();
}

const vector<Disciplina>& Controller::toateDinContract() {
	return contract.getContract();
}

void testStergere() {
	Repository repository;
	Controller controller{ repository };
	vector<Disciplina> all;
	controller.adaugareDisciplina("mate", 6, "real", "Gorcea");
	assert(repository.getElemente().size() == 1);
	controller.adaugareDisciplina("fizica", 4, "real", "Dan");
	assert(controller.getAllDiscipline().size() == 2);
	try {
		controller.stergeDisciplina(Disciplina("sport", 1, "facultativ", "Danu"));
		assert(false);
	}
	catch (contractException&) {
		assert(true);
	}
	assert(controller.getAllDiscipline().size() == 2);
	controller.stergeDisciplina(Disciplina("fizica", 4, "real", "Dan"));
	assert(controller.getAllDiscipline().size() == 1);
}
void testAdauga() {
	Repository repository;
	Controller controller{ repository };
	vector<Disciplina> all;
	controller.adaugareDisciplina("mate", 6, "real", "Gorcea");
	assert(repository.getElemente().size() == 1);
	controller.adaugareDisciplina("fizica", 4, "real", "Dan");
	assert(controller.getAllDiscipline().size() == 2);
	try {
		controller.adaugareDisciplina("fizica", 4, "real", "Dan");
		assert(false);
	}
	catch (contractException&) {
		assert(true);
	}
}
void testModifica()
{
	Repository repository;
	Controller controller{ repository };
	controller.adaugareDisciplina("Matematica", 6, "real", "Vasilescu");
	controller.modificaDisciplina("Matematica", 4, "optional", "Vasilescu");
	assert(controller.getAllDiscipline()[0].getNumarOre() == 4);

}
void testFunctiiContract() {
	Repository repository;
	Controller controller{ repository };
	controller.adaugareDisciplina("mate", 6, "real", "Gorcea");
	controller.adaugareDisciplina("fizica", 4, "real", "Dan");
	controller.addToContract("mate", 6, "real", "Gorcea");
	assert(controller.toateDinContract().size() == 1);
	try {
		controller.addToContract("romana", 3, "optional", "Ion");
		assert(false);
	}
	catch (contractException&) {
		assert(true);
	}
	controller.golesteContract();
	assert(controller.toateDinContract().size() == 0);
	controller.addRandom(5);
	assert(controller.toateDinContract().size() == 2);
}
void testSortareByDenumire()
{
	Repository repository;
	Controller controller{ repository };
	controller.adaugareDisciplina("Matematica", 6, "real", "Vasilescu");
	controller.adaugareDisciplina("Biologie", 4, "real", "Popescu");
	vector<Disciplina> list = controller.sortareByDenumire();
	assert(list[0].getDenumire() == "Biologie");
	assert(list[1].getDenumire() == "Matematica");
}

void testSortareByNumarOre()
{
	Repository repository;
	Controller controller{ repository };
	controller.adaugareDisciplina("Matematica", 6, "real", "Vasilescu");
	controller.adaugareDisciplina("Biologie", 4, "real", "Popescu");
	vector<Disciplina> list = controller.sortareByNumarOre();
	assert(list[0].getDenumire() == "Biologie");
	assert(list[1].getDenumire() == "Matematica");
}

void testFiltrareByNumarOre()
{
	Repository repository;
	Controller controller{ repository };
	controller.adaugareDisciplina("Matematica", 6, "real", "Vasilescu");
	controller.adaugareDisciplina("Biologie", 4, "real", "Popescu");
	controller.adaugareDisciplina("Informatica", 4, "real", "Mircea");
	vector<Disciplina> rezultat = controller.filtrareByNumarOre(4);
	assert(rezultat.size() == 2);
}

void testFiltrareByCadruDidactic()
{
	Repository repository;
	Controller controller{ repository };
	controller.adaugareDisciplina("Matematica", 6, "real", "Vasilescu");
	controller.adaugareDisciplina("Biologie", 4, "real", "Popescu");
	controller.adaugareDisciplina("Informatica", 4, "real", "Mircea");
	vector<Disciplina> rezultat = controller.filtrareByCadruDidactic("Vasilescu");
	assert(rezultat.size() == 1);
}
void testController()
{
	testFunctiiContract();
	testAdauga();
	testStergere();
	testModifica();
	testSortareByDenumire();
	testSortareByNumarOre();
	testFiltrareByNumarOre();
	testFiltrareByCadruDidactic();
}