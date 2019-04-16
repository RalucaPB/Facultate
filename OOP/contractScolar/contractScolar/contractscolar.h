#ifndef CONTRACTSCOLAR_H
#define CONTRACTSCOLAR_H

#include <QtWidgets/QMainWindow>
#include <qwidget.h>
#include <qlistwidget.h>
#include <qpushbutton.h>
#include <qlineedit.h>
#include <qtablewidget.h>
#include <qlistview.h>
#include <vector>
#include "ui_contractscolar.h"
#include"Controller.h"


class contractScolar : public QWidget
{
	Q_OBJECT

private:
	Controller& controller;
	QListWidget* lista;
	QPushButton* butonSortByNumarOre;
	QPushButton* butonSortByDenumire;
	QLineEdit* txtDenumire;
	QLineEdit* txtNumarOre;
	QLineEdit* txtTip;
	QLineEdit* txtCadruDidactic;
	QPushButton* butonAdd;
	QPushButton* butonDelete;
	QPushButton* butonUpdate;
	QPushButton* butonSearch;
	QPushButton* butonUndo;
	QPushButton* butonFilterByNumarOre;
	QPushButton* butonFilterByCadruDidactic;
	QPushButton* butonAll;
	QLineEdit* txtFilterByNumarOre;
	QLineEdit* txtFilterByCadruDidactic;

	QPushButton* butonAddToContract;
	QPushButton* butonEmptyContract;
	QPushButton* butonRandomizeContract;
	QPushButton* butonCartCRUDGUI;
	QPushButton* butonCartReadOnlyGUI;
	QLineEdit* txtRandomize;
	

	void initGUICmps();
	void connectSignalsSlots();
	void reloadList(vector<Disciplina> discipline);
	void addNewDisciplina();
	void deleteDisciplina();
	void updateDisciplina();
	void searchDisciplina();

public:
	contractScolar(Controller& controller) :controller{ controller }
	{
		initGUICmps();
		connectSignalsSlots();
		reloadList(controller.getAllDiscipline());
	}
};

#endif // CONTRACTSCOLAR_H
