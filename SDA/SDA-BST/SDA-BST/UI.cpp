#include"stdafx.h"
#include"UI.h"
#include<iostream>
#include"Eroare.h"
void tiparesteDictionar(DictionarOrdonat& dictionar) {
	IteratorDO iterator = dictionar.iterator();
	int i = 1;
	while (iterator.valid()) {
		TElement pereche = iterator.element();
		cout << i << " " << pereche.getCheie() << " = " << pereche.getValoare() << endl;
	
		iterator.urmator();
		i++;
	}
}
void afiseazaSinonim(DictionarOrdonat& dictionar,TCheie c) {
	IteratorDO iterator = dictionar.iterator();
	int i = 1;
	while (iterator.valid()) {
		TElement pereche = iterator.element();
		if(pereche.getCheie()==c)
			cout <<pereche.getCheie() << " = " << pereche.getValoare() << endl;

		iterator.urmator();
		i++;
	}
}
void UI::showMenu() {
	int cmd;
	while (1) {
		cout << "Dictionar de sinonime: \n";
		cout << "1. Adaugare sinonim;\n";
		cout << "2. Stergere sinonim;\n";
		cout << "3. Afisare dictionar;\n";
		cout << "4. Cautare sinonim pentru un cuvant dat.\n";
		cout << "Introduceti o comanda existenta:\n" << endl;
		cin >> cmd;
		cout << endl;
		if (cmd == 0) {
			break;
		}
		this->optiuni(cmd);
		cin.clear();
	}
}
void UI::optiuni(int cmd) {
	string sinonim;
	string cuvant;
	switch (cmd) {

	case 1: {
		cout << "Dati cuvantul: \n";
		cin >> cuvant;

		cout << "Dati sinonimul:  \n";
		cin >> sinonim;

		sinonime->add(cuvant, sinonim);
		break;
	}
	case 2: {

		cout << "Dati cuvantul:  \n";
		cin >> cuvant;
		cout << "Dati sinonimul:  \n";
		cin >> sinonim;
		sinonime->remove(cuvant, sinonim);
		break;
	}

	case 3:
	{	
		tiparesteDictionar(*sinonime->dictionarS);
		break;

	}
	case 4:
	{
		cout << "Dati cuvantul:\n  \n";
		cin >> cuvant;
		try{
		sinonime->find(cuvant);
		afiseazaSinonim(*sinonime->dictionarS, cuvant);
		}
		catch (dictionarException e) {
			cout << e.getMesaj() << endl;
		}
		break;
		
		
	}
	default: {
		cout << "Comanda invalida! \n";
		break;
	}
	}
}
