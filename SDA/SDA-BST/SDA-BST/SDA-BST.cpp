// SDA-BST.cpp : Defines the entry point for the console application.
//

#include "stdafx.h"
#include"DictionarOrdonat.h"
#include"Sinonim.h"
#include"UI.h"

int main()
{

	Sinonim* sinonimDictionar = new Sinonim;
	UI *ui = new UI(sinonimDictionar);

	ui->showMenu();

	delete(ui);
	delete(sinonimDictionar);

    return 0;
}

