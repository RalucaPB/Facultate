#pragma once
#include<string>

using namespace std;

//definire TCheie si TValoare
typedef string TCheie;
typedef string TValoare;


class NodT;
class DictionarOrdonat;
class IteratorDO;

//clasa TElement formata din TCheie si TValoare
class TElement 
{
private:
	TCheie cheie;
	TValoare valoare;
public:
	//constructor
	TElement(TCheie cheie, TValoare valoare) : cheie{ cheie }, valoare{ valoare } {}
	//destructor
	~TElement() {}
	//operator ==, verifica daca doua cheii sunt egale
	bool operator==(TElement& el)
	{
		return cheie == el.cheie;
	}

	//opertor ==
	bool operator==(TCheie& p)
	{
		return cheie == p;
	}
	
	//returneaza cheie
	TCheie getCheie() const {
		return this->cheie;
	}
	//returneaza valoarea
	TValoare getValoare() const {
		return this->valoare;
	}

	friend class NodT;
	friend class DictionarOrdonat;
	friend class IteratorDO;
};

//clasa NodT
class NodT
{
private:
	TElement info;
	NodT* st;
	NodT* dr;
	NodT* parinte;
public:
	//constructor
	NodT(TElement info) : info{ info }, st{ NULL }, dr{ NULL }, parinte{ NULL } {}
	friend class DictionarOrdonat;
	friend class IteratorDO;
};

//clasa Dictionar Ordonat
class DictionarOrdonat
{
private:
	NodT* rad;
	int dimensiune;
	//cauta un element in dictionar
	NodT* cautare(TElement el, NodT* rad );
	//cauta o cheie in dictionar
	NodT* cautaCheie(TCheie el, NodT* rad);
	//sterg un fiu
	NodT* deleteSon(NodT* root);
	//sterg ambii fii
	NodT* deleteTwo(NodT* root);
	//sterg radacina
	NodT* deleteRad(NodT* root);
public:
	//creeaza un DictionarOrdonat vid
	DictionarOrdonat();
	//destructor
	~DictionarOrdonat();
	//adaugare nod 
	void adaugareNod(NodT* parinte, NodT* node);
	//adauga o pereche <cheie,valoare> in dictionar
	void adauga(TCheie cheie, TValoare valoare);
	//sterge o pereche <cheie,valoare> din dictionar
	void sterge(TCheie cheie, TValoare valoare);
	//returneaza true daca dictionarul e vid, false daca nu
	bool vid();
	//returneaza dimensiunea dictionarului(numarul de perechi)
	int dim();
	//cauta o cheie in dictionar
	NodT* cauta(TCheie cheie);
	//returneaza un iterator pentru dictionar
	IteratorDO iterator();

	friend class IteratorDO;

};

class IteratorDO {
private:
	const DictionarOrdonat& dictionar;
	NodT* curent;
public:
	//creeaza un iterator pentru un dictionar ordonat
	IteratorDO(const  DictionarOrdonat& dictionar):dictionar{dictionar}
	{
		this->curent = findMinimum(dictionar.rad);
	}
	//returneaza adresa nodului avand cheia minima
	NodT* findMinimum(NodT* rad);
	//trece la urmatorul element
	void urmator();

	//verifica daca elementul curent e valid
	bool valid() const;

	//returneaza elementul(perechea) curent
	TElement element() const
	{
		return curent->info;
	}

	friend class DictionarOrdonat;
};

