#include "contractscolar.h"
#include <QtWidgets/QApplication>
#include<Controller.h>
#include<Repository.h>


int main(int argc, char *argv[])
{
	QApplication a(argc, argv);
	testDisciplina();
	testContract();
	testRepository();
	testController();
	fileRepository repository{ "fisier.txt" };
	Controller controller{ repository };

	contractScolar interfata{ controller };
	interfata.show();
	return a.exec();
}
