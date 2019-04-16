#pragma once
#include<vector>
#include<algorithm>
#include"Disciplina.h"
#include"Repository.h"
#include <random>    
#include <chrono>
#include"Observer.h"
using namespace std;

class Contract: public Observable
{
private:
	vector<Disciplina> contractDiscipline;
	Repository& repository;
public:
	//constructor
	Contract(Repository& repository) :repository{ repository }{}
	/*
	adaugare in contract
	disciplina- disciplina care trebuie adaugata in contract
	*/
	void adaugareContract(const Disciplina& disciplina);
	//golire contract
	void golesteContract();
	void stergeDinContract(const Disciplina& disciplina);
	//generare randam de discipline care formeaza un contract
	void umpleContract(int numar);
	//returneaza contractul
	const vector<Disciplina>& getContract()const
	{
		return contractDiscipline;
	}
};
void testContract();