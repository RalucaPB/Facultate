#pragma once
#include<string>
#include <stdexcept>

using namespace std;

class contractException
{
	string mesaj;
public:
	contractException(const string& mesaj) :mesaj{ mesaj } {};
	string getMesaj()const 
	{ 
		return mesaj; 
	}
};
