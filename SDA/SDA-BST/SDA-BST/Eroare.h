#pragma once
#include"DictionarOrdonat.h"
#include<string>
#include<stdexcept>

using namespace std;

class dictionarException
{	//mesaju de eroare
	string mesaj;
public:
	//constructor
	dictionarException(string mesaj):mesaj{mesaj}{}
	//returneaza mesajul
	string getMesaj()
	{
		return mesaj;
	}
};
