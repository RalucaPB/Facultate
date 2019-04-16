#pragma once
#include"Sinonim.h"
class UI
{
private:
	Sinonim* sinonime;
public:
	//constructor
	UI(Sinonim* sinonime) :sinonime{ sinonime } {}

	//destructor
	~UI() 
	{
		delete(sinonime);
	}

	//afiseaza meniul
	void showMenu();

	//executa comanda cmd
	void optiuni(int cmd);

};