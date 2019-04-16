#pragma once
#include"Repository.h"
#include <vector>
#include "Undo.h"
#include <memory>
#include"Disciplina.h"
#include"Contract.h"

using namespace std;

class Controller
{
private:
	Repository& repository;
	//tinem pointeri la ActiuneUndo pentru ca vrem apel polimorfic
	//punem unique_ptr pentru ca avem responsabilitatea de a elibera memoria pentru 
	vector<unique_ptr<Undo>> listaUndo;
	Contract contract;
public:
	//constructor
	Controller(Repository& repository) :repository{ repository },contract{repository}
	{
	}
	//destructor
	~Controller() {}
	/*
	Adaugare disciplina
	Arunca contractException daca mai exista disciplina
	*/
	void adaugareDisciplina(const string& denumire, int numarOre, const string& tip, const string& cadruDidactic);
	//sterge o disciplina
	void stergeDisciplina(const Disciplina& disciplina);
	/*
	returneaza toate disciplinele
	*/
	const vector<Disciplina> getAllDiscipline() const
	{
		vector<Disciplina> lista = repository.getElemente();
		return lista;

	}
	//modificare disciplina
	void modificaDisciplina( const string& denumireNoua,
		const int& numarOreNou, const string& tipNou, const string& cadruDidacticNou);
	//realizare undo
	void doUndo();
	//filtrare dupa numarOre
	vector<Disciplina> filtrareByNumarOre(const int& numarOre);
	//filtrare supa cadruDidactic
	vector<Disciplina> filtrareByCadruDidactic(const string& cadruDidactic);
	//sortare dupa denumire
	vector <Disciplina> sortareByDenumire();
	//sortare dupa 
	vector <Disciplina> sortareByNumarOre();
	
	//Cauta Disciplina
	
	Disciplina cautareDisciplina(const string& denumire, const string& cadruDidactic) 
	{
		return repository.cautaElement(denumire, cadruDidactic);
	}
	//adaugare in contract
	const vector<Disciplina>& addToContract(const string& denumire, int numarOre, const string& tip, const string& cadruDidactic);

	const vector<Disciplina>& addRandom(int numar);

	const vector<Disciplina>& golesteContract();
	const vector<Disciplina>& stergeContract(const Disciplina& disciplina);

	const vector<Disciplina>& toateDinContract();
	Contract& getContracte() {
		return contract;
	}

};
void testAdauga();
void testFunctiiContract();
void testController();
void testStergere();
void testModifica();
void testSortareByDenumire();
void testSortareByNumarOre();
void testFiltrareByNumarOre();
void testFiltrareByCadruDidactic();