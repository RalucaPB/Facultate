#pragma once
#include <QAbstractTableModel>
#include <Disciplina.h>
#include <vector>
#include <qdebug.h>

using namespace std;

class MyTableModel : public QAbstractTableModel {
private:

	vector<Disciplina> disciplina;
public:
	MyTableModel(vector<Disciplina> disciplina) : disciplina{ disciplina } {}

	int rowCount(const QModelIndex & parent = QModelIndex()) const override {
		return disciplina.size();
	}

	int columnCount(const QModelIndex & parent = QModelIndex()) const override {
		return 4;
	}

	QVariant data(const QModelIndex & index, int role = Qt::DisplayRole) const override {
		if (role == Qt::DisplayRole) {
			qDebug() << "row:" << index.row() << " column:" << index.column();
			Disciplina disciplina1 = disciplina[index.row()];
			if (index.column() == 0) {
				return QString::fromStdString(disciplina1.getDenumire());
			}
			else if (index.column() == 1) {
				return QString::number(disciplina1.getNumarOre());
			}
			else if (index.column() == 2) {
				return QString::fromStdString(disciplina1.getTip());
			}
			else if (index.column() == 3) {
				return QString::fromStdString(disciplina1.getCadruDidactic());
			}
		}

		return QVariant{};
	}
};
