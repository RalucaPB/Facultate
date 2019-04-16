#include"stdafx.h"
#include"DictionarOrdonat.h"
#include"Eroare.h"
//relatia de ordine
int relatie(string op,TCheie e1, TCheie e2)
{
	if (op == "<")
		return e1 < e2;
	else if(op == ">")
		return e1 > e2;
}

DictionarOrdonat::DictionarOrdonat()
{
	rad = NULL;
	dimensiune = 0;
}

DictionarOrdonat::~DictionarOrdonat()
{
	rad = NULL;
}
bool DictionarOrdonat::vid()
{
	return rad == NULL;
}
int DictionarOrdonat::dim()
{
	return dimensiune;
}
void DictionarOrdonat::adaugareNod(NodT* parinte, NodT* node)
{
	
	if (relatie("<",node->info.cheie , parinte->info.cheie))
	{//se adauga in subarborele stang
		if (parinte->st == NULL)
		{
			parinte->st=node;
			node->parinte=parinte;
		}
		else
			adaugareNod(parinte->st, node);
	}
	else 
		if (relatie(">", node->info.cheie, parinte->info.cheie))
		
	{	// se adauga in subarborele drept
		if (parinte->dr == NULL)
		{
			parinte->dr=node;
			node->parinte=parinte;
		}
		else
			adaugareNod(parinte->dr, node);
	}
		else throw dictionarException("Exista deja!");
}

void DictionarOrdonat::adauga(TCheie cheie, TValoare valoare)
{	//se creeaza elementul
	TElement el(cheie, valoare);
	//se creeaza nodul
	NodT* node = new NodT{ el };
	//daca radacina este nula,radacina devine node
	if (rad == NULL)
		rad = node;
	else
		//daca nu se adauga node 
		adaugareNod(rad, node);

	dimensiune += 1;
}

NodT*  DictionarOrdonat::cautare(TElement el,NodT* rad)
{	
	NodT* node =rad;

	if (node == NULL)
		return NULL;

	//daca se gaseste nodul se returneaza
	if (el==node->info)
		return node;
	else 
		
		if (relatie("<", el.cheie,node->info.cheie))
			//cautare in subarborele stang
		return cautare(el, node->st);
	else
		//cautare in subarborele drept
		return cautare(el, node->dr);
}
NodT*  DictionarOrdonat::cautaCheie(TCheie el, NodT* rad)
{
	NodT* node = rad;

	if (node == NULL)
		return NULL;

	//daca se gaseste nodul se returneaza
	if (el == node->info.cheie)
		return node;
	else
		//cautare in subarborele stang
		if (relatie("<", el, node->info.cheie))
			return cautaCheie(el, node->st);
		else
			//cautare in subarborele drept
			return cautaCheie(el, node->dr);
}
NodT*  DictionarOrdonat::cauta(TCheie cheie)
{
	//daca se gaseste nodul se returneaza,daca nu se returneaza un mesaj de eroare
	NodT* node = cautaCheie(cheie, rad);
	if (node == NULL)throw dictionarException("Nu exista!");
	return node;
}

NodT* DictionarOrdonat::deleteSon(NodT* root)
{
	return (!root->st ? root->dr : root->st);

}

NodT* DictionarOrdonat::deleteTwo(NodT* root) 
{

	NodT* leftSon = root->st, *dad = root;

	if (!leftSon->dr) {
		root->info = move(leftSon->info);
		root->st = leftSon->st;
		return root;
	}
	//caut cel mai mare predecesor din stanga
	for (; leftSon->dr; dad = leftSon, leftSon = leftSon->dr);

	root->info = leftSon->info;

	dad->dr = leftSon->st;

	return root;
}

NodT* DictionarOrdonat::deleteRad(NodT* root) {

	if (!root->st && !root->dr)return nullptr;//nu are fii

	if ((root->st && !root->dr) || (!root->st && root->dr)) 
	{//are un fiu
		auto p = deleteSon(root);
		return p;
	}
	//are ambii fii
	return deleteTwo(root);
}
void DictionarOrdonat::sterge(TCheie cheie, TValoare valoare)
{	
	//se creeaza elementul
	TElement el{ cheie,valoare };
	//se cauta elementul in dictionar
	NodT* node = cautare(el, rad);
	//daca nu s-a gasit se afiseaza mesaj de eroare
	if (node == NULL)throw dictionarException("Nu exista!");
		// nu are fii
	if (rad == node) {
		rad = deleteRad(rad);
		--dimensiune;
		return;
	}
	if (node->st == NULL && node->dr == NULL)
		{
			if (node->parinte != NULL)
			{
				if (node->parinte->st == node)
					node->parinte->st = NULL;
				else
					node->parinte->dr = NULL;
			}
			node = NULL;
			dimensiune--;
			
			
		}
		// are fiu stang
		else if (node->dr == NULL)
		{
			if (node->parinte != NULL)
			{
				if (node->parinte->st == node)
				{
					node->st->parinte = node->parinte;
					node->parinte->st = node->st;
				}
				else
				{
					node->st->parinte = node->parinte;
					node->parinte->dr = node->st;
				}
			}
			node = NULL;
			dimensiune--;
		}
		// are fiu drept
		else if (node->st == NULL)
		{
			if (node->parinte != NULL)
			{
				if (node->parinte->dr == node)
				{
					node->dr->parinte = node->parinte;
					node->parinte->dr = node->dr;
				}
				else
				{
					node->dr->parinte = node->parinte;
					node->parinte->st = node->dr;
				}
			}
			node = NULL;
			dimensiune--;
		}
		//are ambii fii
		else
		{
			NodT* x = node;

			while (x->st != NULL)
				x = x->st;

			node->info = x->info;
			NodT* nodeChild;
			if (x->st == NULL)nodeChild = x->dr;
			else  nodeChild = x->st;
			if (x->st != NULL)
			{
				if (x->parinte->dr == x)
					x->parinte->dr = nodeChild;
				else
					x->parinte->st = nodeChild;
			}
			else
			{
				if (x->parinte->dr == x)
					x->parinte->dr = nodeChild;
				else
					x->parinte->st = nodeChild;
			}
			dimensiune--;
		}
		
	
}

IteratorDO  DictionarOrdonat::iterator() 
{
	return IteratorDO(*this);
}

NodT* IteratorDO:: findMinimum(NodT* rad)
{
	if (rad == NULL)
		return NULL;

	if (rad->st != NULL)
		return findMinimum(rad->st);

	return rad;
}
bool IteratorDO::valid() const
{
	return curent != NULL;
}
void IteratorDO	::urmator()
{
	if (curent->dr != NULL)
	{
		curent = findMinimum(curent->dr);
		return;
	}

	NodT* y = curent->parinte;
	NodT* x = curent;

	while (y != NULL && x == y->dr)
	{
		x = y;
		y = y->parinte;
	}

	curent = y;

}
