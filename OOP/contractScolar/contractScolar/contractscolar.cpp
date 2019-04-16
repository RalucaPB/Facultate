#include "contractscolar.h"
#include "Disciplina.h"
#include <QtWidgets/QHBoxLayout>
#include <QtWidgets/QFormLayout>
#include <QtWidgets/QLabel>
#include <QtWidgets/QMessageBox>
#include <string>
#include"CartCRUDGUI.h"
#include"CartReadOnlyGUI.h"
void contractScolar::initGUICmps() {
	/*
	Stabilirea layout-ului principal
	*/
	QHBoxLayout* layout = new QHBoxLayout;
	setLayout(layout);

	QFont font("Comic Sans MS");

	/*
	Widget pentru lista disciplinelor
	*/
	QWidget* LeftWidget = new QWidget;
	QVBoxLayout* vLayoutLeft = new QVBoxLayout;
	LeftWidget->setLayout(vLayoutLeft);

	lista = new QListWidget;
	vLayoutLeft->addWidget(lista);

	/*
	Widget pentru contract
	*/
	QWidget* RightWidget = new QWidget;
	QVBoxLayout* vLayoutRight = new QVBoxLayout;
	RightWidget->setLayout(vLayoutRight);

	/*
	Facem un form pentru detalii
	*/
	QWidget* FormWidget = new QWidget;
	QFormLayout* layoutFormWidget = new QFormLayout;
	FormWidget->setLayout(layoutFormWidget);
	txtDenumire = new QLineEdit;
	QLabel* label1 = new QLabel("Denumire");
	label1->setStyleSheet("QLabel { color : black; }");
	label1->setFont(font);
	layoutFormWidget->addRow(label1, txtDenumire);
	txtNumarOre = new QLineEdit;
	QLabel* label2 = new QLabel("NumarOre");
	label2->setStyleSheet("QLabel { color : black; }");
	label2->setFont(font);
	layoutFormWidget->addRow(label2, txtNumarOre);
	txtTip = new QLineEdit;
	QLabel* label3 = new QLabel("Tip");
	label3->setStyleSheet("QLabel { color : black; }");
	label3->setFont(font);
	layoutFormWidget->addRow(label3, txtTip);
	txtCadruDidactic = new QLineEdit;
	QLabel* label4 = new QLabel("CadruDidactic");
	label4->setStyleSheet("QLabel { color : black; }");
	label4->setFont(font);
	layoutFormWidget->addRow(label4, txtCadruDidactic);

	/*
	Perechea 1 de butoane - stanga
	*/
	QWidget* LeftPair1 = new QWidget;
	QHBoxLayout* LayoutLeftPair1 = new QHBoxLayout;
	LeftPair1->setLayout(LayoutLeftPair1);

	butonAdd = new QPushButton("Adauga disciplina");
	butonAdd->setFont(font);
	LayoutLeftPair1->addWidget(butonAdd);
	butonDelete = new QPushButton("Sterge disciplina");
	butonDelete->setFont(font);
	LayoutLeftPair1->addWidget(butonDelete);

	/*
	Perechea 2 de butoane - stanga
	*/
	QWidget* LeftPair2 = new QWidget;
	QHBoxLayout* LayoutLeftPair2 = new QHBoxLayout;
	LeftPair2->setLayout(LayoutLeftPair2);

	butonUpdate = new QPushButton("Modifica disciplina");
	butonUpdate->setFont(font);
	LayoutLeftPair2->addWidget(butonUpdate);
	butonSearch = new QPushButton("Cauta disciplina");
	butonSearch->setFont(font);
	LayoutLeftPair2->addWidget(butonSearch);

	/*
	Perechea 3 de butoane - stanga
	*/
	QWidget* LeftPair3 = new QWidget;
	QHBoxLayout* LayoutLeftPair3 = new QHBoxLayout;
	LeftPair3->setLayout(LayoutLeftPair3);

	butonAll = new QPushButton("Toate disciplinele");
	butonAll->setFont(font);
	LayoutLeftPair3->addWidget(butonAll);
	butonUndo = new QPushButton("Undo");
	butonUndo->setFont(font);
	LayoutLeftPair3->addWidget(butonUndo);

	/*
	Perechea 1 de butoane - dreapta
	*/
	QWidget* RightPair1 = new QWidget;
	QHBoxLayout* LayoutRightPair1 = new QHBoxLayout;
	RightPair1->setLayout(LayoutRightPair1);

	butonAddToContract = new QPushButton("Adauga in contract");
	butonAddToContract->setFont(font);
	LayoutRightPair1->addWidget(butonAddToContract);
	butonEmptyContract = new QPushButton("Golire Contract");
	butonEmptyContract->setFont(font);
	LayoutRightPair1->addWidget(butonEmptyContract);
	

	/*
	Perechea 2 de butoane - dreapta
	*/

	QWidget* RightPair2 = new QWidget;
	QHBoxLayout* LayoutRightPair2 = new QHBoxLayout;
	RightPair2->setLayout(LayoutRightPair2);

	butonRandomizeContract = new QPushButton("Generare contract");
	butonRandomizeContract->setFont(font);
	LayoutRightPair2->addWidget(butonRandomizeContract);

	txtRandomize = new QLineEdit;
	LayoutRightPair2->addWidget(txtRandomize);


	/*
	Perechea 3 de butoane - dreapta
	*/
	QWidget* RightPair3 = new QWidget;
	QHBoxLayout* LayoutRightPair3 = new QHBoxLayout;
	RightPair3->setLayout(LayoutRightPair3);

	butonCartCRUDGUI = new QPushButton("Contract GUI");
	butonCartCRUDGUI->setFont(font);
	LayoutRightPair3->addWidget(butonCartCRUDGUI);
	butonCartReadOnlyGUI = new QPushButton("Desen contract");
	butonCartReadOnlyGUI->setFont(font);
	LayoutRightPair3->addWidget(butonCartReadOnlyGUI);

	/*
	Butoanele pentru sortare
	*/
	QWidget* sortButoane = new QWidget;
	QVBoxLayout* LayoutSortButoane = new QVBoxLayout;
	sortButoane->setLayout(LayoutSortButoane);

	butonSortByNumarOre = new QPushButton("Sortare dupa NumarOre");
	butonSortByNumarOre->setFont(font);
	LayoutSortButoane->addWidget(butonSortByNumarOre);

	butonSortByDenumire = new QPushButton("Sortare dupa Denumire");
	butonSortByDenumire->setFont(font);
	LayoutSortButoane->addWidget(butonSortByDenumire);

	/*
	Perechea 1 - filtrare dupa numar ore
	*/
	QWidget* FilterPair1 = new QWidget;
	QHBoxLayout* LayoutFilterPair1 = new QHBoxLayout;
	FilterPair1->setLayout(LayoutFilterPair1);

	butonFilterByNumarOre = new QPushButton("Filtrare dupa NumarOre");
	butonFilterByNumarOre->setFont(font);
	LayoutFilterPair1->addWidget(butonFilterByNumarOre);

	QWidget* LeftForm1 = new QWidget;
	QFormLayout* LayoutLeftForm1 = new QFormLayout;
	LeftForm1->setLayout(LayoutLeftForm1);
	txtFilterByNumarOre = new QLineEdit;
	LayoutLeftForm1->addRow(txtFilterByNumarOre);
	LayoutFilterPair1->addWidget(LeftForm1);

	/*
	Perechea 2 - filtrare dupa cadru didactic
	*/
	QWidget* FilterPair2 = new QWidget;
	QHBoxLayout* LayoutFilterPair2 = new QHBoxLayout;
	FilterPair2->setLayout(LayoutFilterPair2);

	butonFilterByCadruDidactic = new QPushButton("Filtrare dupa CadruDidactic");
	butonFilterByCadruDidactic->setFont(font);
	LayoutFilterPair2->addWidget(butonFilterByCadruDidactic);

	QWidget* LeftForm2 = new QWidget;
	QFormLayout* LayoutLeftForm2 = new QFormLayout;
	LeftForm2->setLayout(LayoutLeftForm2);
	txtFilterByCadruDidactic = new QLineEdit;
	LayoutLeftForm2->addRow(txtFilterByCadruDidactic);
	LayoutFilterPair2->addWidget(LeftForm2);

	/*
	Aplicarea layout-urilor
	*/
	vLayoutLeft->addWidget(FormWidget);
	vLayoutLeft->addWidget(LeftPair1);
	vLayoutLeft->addWidget(LeftPair2);
	vLayoutLeft->addWidget(LeftPair3);
	vLayoutLeft->addWidget(sortButoane);
	vLayoutLeft->addWidget(FilterPair1);
	vLayoutLeft->addWidget(FilterPair2);
	vLayoutRight->addWidget(RightPair1);
	vLayoutRight->addWidget(RightPair2);
	vLayoutRight->addWidget(RightPair3);
	layout->addWidget(LeftWidget);
	layout->addWidget(RightWidget);
}

void contractScolar::connectSignalsSlots() {

	/*
	Cand se emite semnalul clicked de pe buton reincarc lista
	Sortare dupa numarOre
	*/
	QObject::connect(butonSortByNumarOre, &QPushButton::clicked, [&]() {
		reloadList(controller.sortareByNumarOre());
	});

	/*
	Sortare dupa denumire
	*/
	QObject::connect(butonSortByDenumire, &QPushButton::clicked, [&]() {
		reloadList(controller.sortareByDenumire());
	});


	/*
	Filtrare dupa numarOre
	*/
	QObject::connect(butonFilterByNumarOre, &QPushButton::clicked, [&]() {
		reloadList(controller.filtrareByNumarOre(txtFilterByNumarOre->text().toInt()));
		txtFilterByNumarOre->setText("");
	});

	/*
	Filtrare dupa cadruDidactic
	*/
	QObject::connect(butonFilterByCadruDidactic, &QPushButton::clicked, [&]() {
		reloadList(controller.filtrareByCadruDidactic(txtFilterByCadruDidactic->text().toStdString()));
		txtFilterByCadruDidactic->setText("");
	});

	/*
	Afiseaza toate disciplinele
	*/
	QObject::connect(butonAll, &QPushButton::clicked, [&]() {
		reloadList(controller.getAllDiscipline());
	});
	/*
	Undo
	*/
	QObject::connect(butonUndo, &QPushButton::clicked, [&]() {
		try {
			controller.doUndo();
			reloadList(controller.getAllDiscipline());
		}
		catch (contractException& exception) {
			QMessageBox::warning(nullptr, "Warning", QString::fromStdString(exception.getMesaj()));
		}
	});

	/*
	Adaugare in contract
	*/
	QObject::connect(butonAddToContract, &QPushButton::clicked, [&]() {
		try {
			controller.addToContract(txtDenumire->text().toStdString(), txtNumarOre->text().toInt(), txtTip->text().toStdString(), txtCadruDidactic->text().toStdString());
			
		}
		catch (contractException& exception) {
			QMessageBox::warning(this, "Warning", QString::fromStdString(exception.getMesaj()));
		}
	});

	/*
	Golire contract
	*/
	QObject::connect(butonEmptyContract, &QPushButton::clicked, [&]() {
		controller.golesteContract();
		
	});

	/*
	Generare contract
	*/
	QObject::connect(butonRandomizeContract, &QPushButton::clicked, [&]() {
		try {
			controller.golesteContract();
			controller.addRandom(txtRandomize->text().toInt());
			txtRandomize->setText("");
		}
		catch (contractException& exception) {
			QMessageBox::warning(this, "Warning", QString::fromStdString(exception.getMesaj()));
		}
	});

	/*
	Cart CRUD GUI
	*/
	QObject::connect(butonCartCRUDGUI, &QPushButton::clicked, [&]() {
		CartTableGUI *tableGUI = new CartTableGUI{ controller.getContracte() };
		tableGUI->show();
	});
	/*
	Cart Read Only GUI
	*/
	QObject::connect(butonCartReadOnlyGUI, &QPushButton::clicked, [&]() {
		CartReadOnlyGUI *readOnlyGUI = new CartReadOnlyGUI{ controller.getContracte() };
		readOnlyGUI->show();
	});

	/*
	Cand se selecteaza elementul din lista incarc detaliile
	*/
	QObject::connect(lista, &QListWidget::itemSelectionChanged, [&]() {
		if (lista->selectedItems().isEmpty()) {
			/*
			Nu este nimic selectat (golesc detaliile)
			*/
			txtDenumire->setText("");
			txtNumarOre->setText("");
			txtTip->setText("");
			txtCadruDidactic->setText("");
			return;
		}
		QListWidgetItem* selItem = lista->selectedItems().at(0);
		QString denumire = selItem->text();
		txtDenumire->setText(denumire);
		QString cadruDidactic = selItem->data(Qt::UserRole).toString();
		txtCadruDidactic->setText(cadruDidactic);
		try {
			/*
			Cautam disciplina
			*/
			Disciplina disciplina = controller.cautareDisciplina(denumire.toStdString(), cadruDidactic.toStdString());
			txtNumarOre->setText(QString::number(disciplina.getNumarOre()));
			txtTip->setText(QString::fromStdString(disciplina.getTip()));
		}
		catch (contractException& ex) {
			QMessageBox::warning(nullptr, "Warning", QString::fromStdString(ex.getMesaj()));
		}
	});
	QObject::connect(butonAdd, &QPushButton::clicked, this, &contractScolar::addNewDisciplina);
	QObject::connect(butonDelete, &QPushButton::clicked, this, &contractScolar::deleteDisciplina);
	QObject::connect(butonUpdate, &QPushButton::clicked, this, &contractScolar::updateDisciplina);
	QObject::connect(butonSearch, &QPushButton::clicked, this, &contractScolar::searchDisciplina);
}

/*
Adauga disciplina
*/
void contractScolar::addNewDisciplina()
{
	try {
		controller.adaugareDisciplina(txtDenumire->text().toStdString(), txtNumarOre->text().toInt(), txtTip->text().toStdString(), txtCadruDidactic->text().toStdString());
		reloadList(controller.getAllDiscipline());
	}
	catch (contractException& exception) {
		QMessageBox::warning(this, "Warning", QString::fromStdString(exception.getMesaj()));
	}
}


/*
Sterge disciplina
*/
void contractScolar::deleteDisciplina() {
	try {
		controller.stergeDisciplina(Disciplina(txtDenumire->text().toStdString(), txtNumarOre->text().toInt(), txtTip->text().toStdString(), txtCadruDidactic->text().toStdString()));
		reloadList(controller.getAllDiscipline());
	}
	catch (contractException& exception) {
		QMessageBox::warning(this, "Warning", QString::fromStdString(exception.getMesaj()));
	}
}

/*
Modifica disciplina
*/
void contractScolar::updateDisciplina() {
	try {
		controller.modificaDisciplina(txtDenumire->text().toStdString(), txtNumarOre->text().toInt(), txtTip->text().toStdString(), txtCadruDidactic->text().toStdString());
		reloadList(controller.getAllDiscipline());
	}
	catch (contractException& exception) {
		QMessageBox::warning(this, "Warning", QString::fromStdString(exception.getMesaj()));
	}
}

/*
Cauta disciplina
*/
void contractScolar::searchDisciplina() {
	try {
		controller.cautareDisciplina(txtDenumire->text().toStdString(), txtCadruDidactic->text().toStdString());
		QMessageBox::information(this, "Information", "Disciplina a fost gasita!");
	}
	catch (contractException& exception) {
		QMessageBox::warning(this, "Warning", QString::fromStdString(exception.getMesaj()));
	}
}

/*
Reincarca lista
*/
void contractScolar::reloadList(std::vector<Disciplina> discipline) {
	lista->clear();
	for (auto& element : discipline) {
		QListWidgetItem* item = new QListWidgetItem(QString::fromStdString(element.getDenumire()), lista);
		//Adaug in lista (invizibil) si cadruDidactic
		item->setData(Qt::UserRole, QString::fromStdString(element.getCadruDidactic()));
	}
}

