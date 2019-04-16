#include"Undo.h"
void undoForAdd::undo()
{
	allDiscipline.stergeElement(disciplinaAdaugata);
}

void undoForDelete::undo()
{
	allDiscipline.adaugareElement(disciplinaStearsa);
}
void undoForUpdate::undo()
{
	allDiscipline.updateElement(disciplinaNoua);
}
