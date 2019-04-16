#include"stdafx.h"
#include"Sinonim.h"
#include"Eroare.h"
#include<iostream>
Sinonim::Sinonim()
{
	dictionarS = new DictionarOrdonat();
	it = new IteratorDO(*dictionarS);
}
Sinonim::~Sinonim()
{
	delete(dictionarS);
	delete(it); 
}
void Sinonim::add(string cuvant, string sinonim)
{
	try {
		dictionarS->adauga(cuvant, sinonim);
	}
	catch (dictionarException e) {
		cout << e.getMesaj() << endl;
	}
}
void Sinonim::remove(string cuvant, string sinonim)
{
	try{
	dictionarS->sterge(cuvant, sinonim);
	}
	catch (dictionarException e) {
		cout << e.getMesaj() << endl;
	}
}
 void Sinonim::find(string cuvant)
{
	
	try {
		 dictionarS->cauta(cuvant);
		 cout << "Exista" << "\n";
		 cout << "Cuvantul si sinonimul sau sunt:\n";
	}
	catch (dictionarException e) {
		cout << e.getMesaj() << endl;
	}
}
