#pragma once
#include <qwidget.h>
#include <QtWidgets/QVBoxLayout>
#include <QtWidgets/QHBoxLayout>
#include <qpushbutton.h>
#include <qlistwidget.h>
#include <qtablewidget.h>
#include <qstring.h>
#include <qlabel.h>
#include <vector>
#include "Contract.h"
#include "Observer.h"
#include "TableModel.h"
#include <qpainter.h>
#include <QtWidgets/QGraphicsScene>

using namespace std;

class CartReadOnlyGUI : public QWidget, public Observer {
private:
	Contract& contract;
	QTableView* tableView = new QTableView;

	void loadTable(const vector<Disciplina>& discipline) {
		MyTableModel* model = new MyTableModel{ discipline };
		tableView->setModel(model);
	}

	void initGUI() {
		contract.addObserver(this);


	}

public:
	CartReadOnlyGUI(Contract& contract) : contract{ contract } {
		initGUI();
		loadTable(contract.getContract());
	}
	void update() override {
		loadTable(contract.getContract());
	}

	~CartReadOnlyGUI() {
		contract.removeObserver(this);
	}
protected:
	void paintEvent(QPaintEvent* event) override {
		QPainter painter{ this };
		QPixmap book("book.jpg");
		for (int i = 1; i <= contract.getContract().size(); i++) {
			painter.drawPixmap(rand() % 400, rand() % 400, book);
		}
	}
};