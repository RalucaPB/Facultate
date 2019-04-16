#pragma once
#include"DictionarOrdonat.h"

class Sinonim
{
public:

	DictionarOrdonat* dictionarS;
	IteratorDO* it;
	//constructor
	Sinonim();
	//destructor
	~Sinonim();
	//adauga in dictionarul de sinonime perechea<cuvant,sinonim>
	void add(string cuvant, string sinonim);
	//sterge din dictionarul de sinonime perechea<cuvant,sinonim>
    void remove(string cuvant, string sinonim);
	//cauta in dictionarul de sinonime un cuvant
	void find(string cuvant);
	



};