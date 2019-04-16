/********************************************************************************
** Form generated from reading UI file 'contractscolar.ui'
**
** Created by: Qt User Interface Compiler version 5.6.2
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_CONTRACTSCOLAR_H
#define UI_CONTRACTSCOLAR_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QToolBar>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_contractScolarClass
{
public:
    QMenuBar *menuBar;
    QToolBar *mainToolBar;
    QWidget *centralWidget;
    QStatusBar *statusBar;

    void setupUi(QMainWindow *contractScolarClass)
    {
        if (contractScolarClass->objectName().isEmpty())
            contractScolarClass->setObjectName(QStringLiteral("contractScolarClass"));
        contractScolarClass->resize(600, 400);
        menuBar = new QMenuBar(contractScolarClass);
        menuBar->setObjectName(QStringLiteral("menuBar"));
        contractScolarClass->setMenuBar(menuBar);
        mainToolBar = new QToolBar(contractScolarClass);
        mainToolBar->setObjectName(QStringLiteral("mainToolBar"));
        contractScolarClass->addToolBar(mainToolBar);
        centralWidget = new QWidget(contractScolarClass);
        centralWidget->setObjectName(QStringLiteral("centralWidget"));
        contractScolarClass->setCentralWidget(centralWidget);
        statusBar = new QStatusBar(contractScolarClass);
        statusBar->setObjectName(QStringLiteral("statusBar"));
        contractScolarClass->setStatusBar(statusBar);

        retranslateUi(contractScolarClass);

        QMetaObject::connectSlotsByName(contractScolarClass);
    } // setupUi

    void retranslateUi(QMainWindow *contractScolarClass)
    {
        contractScolarClass->setWindowTitle(QApplication::translate("contractScolarClass", "contractScolar", 0));
    } // retranslateUi

};

namespace Ui {
    class contractScolarClass: public Ui_contractScolarClass {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_CONTRACTSCOLAR_H
