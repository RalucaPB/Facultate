#pragma once
#include <qwidget.h>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QHBoxLayout>
#include<QLineEdit>
#include <qpushbutton.h>
#include <qlistwidget.h>
#include <qtablewidget.h>
#include <qstring.h>
#include <qlabel.h>
#include<QMessageBox>
#include <vector>
#include "Contract.h"
#include "Observer.h"
#include "TableModel.h"
#include"Validare.h"

using namespace std;

class CartTableGUI : public QWidget, public Observer {
private:
	Contract& contract;
	QPushButton* buton;
	QPushButton* butonRandom;
	QPushButton* butonStergere;
	QLineEdit* txtRandomize;

	QTableView* tableView = new QTableView;

	void loadTable(const vector<Disciplina>& discipline) {
		MyTableModel* model = new MyTableModel{ discipline };
		tableView->setModel(model);
	}

	void initGUI() {
		contract.addObserver(this);
		QVBoxLayout* layout = new QVBoxLayout;
		

		layout->addWidget(tableView);
		QFont font("Comic Sans MS");
		buton = new QPushButton("Golire Contract");
		buton->setFont(font);
		layout->addWidget(buton);
		setLayout(layout);
		

		QHBoxLayout* hlayout = new QHBoxLayout;
		QWidget* widRand = new QWidget;
		butonRandom = new QPushButton("Generare contract");
		butonRandom->setFont(font);
		hlayout->addWidget(butonRandom);
		txtRandomize = new QLineEdit;
		txtRandomize->setFont(font);
		hlayout->addWidget(txtRandomize);
		widRand->setLayout(hlayout);
		layout->addWidget(widRand);

		
	}

	void connectSignals() {
		QObject::connect(buton, &QPushButton::clicked, [&]() {
			contract.golesteContract();
		});
		
	
		QObject::connect(butonRandom, &QPushButton::clicked, [&]() {
			try {
				contract.golesteContract();
				contract.umpleContract(txtRandomize->text().toInt());
				loadTable(contract.getContract());
				txtRandomize->setText("");
			}
			catch (contractException& ex) {
				QMessageBox::warning(this, "Warning", QString::fromStdString(ex.getMesaj()));
			}
		});
	}
public:
	CartTableGUI(Contract& contract) : contract{ contract } {
		initGUI();
		connectSignals();
		loadTable(contract.getContract());
	}

	void update() override {
		loadTable(contract.getContract());
	}

	~CartTableGUI() {
		contract.removeObserver(this);
	}
};

