#pragma once
#include <string>
#include <iostream>
#include <assert.h>

using namespace std;


class Disciplina
{
private:
	string denumire;
	int numarOre;
	string tip;
	string cadruDidactic;
public:
	//constructor
	Disciplina(string denumire, int numarOre, string tip, string cadruDidactic) :denumire{ denumire }, numarOre{ numarOre }, tip{ tip }, cadruDidactic{ cadruDidactic }
	{
	}
	Disciplina() = default;
	//constructor de copiere
	Disciplina(const Disciplina& element) = default;
	//returneaza denumirea disciplinei
	string getDenumire() const
	{
		return denumire;
	}
	//returneaza numarul de ore al disciplinei
	int getNumarOre() const
	{
		return numarOre;
	}
	//returneaza tipul disciplinei
	string getTip() const
	{
		return tip;
	}
	//returneaza cadrul didactic care preda respectiva disciplina
	string getCadruDidactic() const
	{
		return cadruDidactic;
	}
	//seteaza denumirea
	void setDenumire(const string& denumire)
	{
		this->denumire = denumire;

	}
};

void testDisciplina();