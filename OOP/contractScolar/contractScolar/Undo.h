#pragma once
#include "Disciplina.h"
#include "Repository.h"
#include <memory>
#include <algorithm>
class Undo
{
public:
	virtual void undo() = 0;
	//destructor
	virtual ~Undo() {};
};
class undoForAdd : public Undo {
private:

	Disciplina disciplinaAdaugata;
	Repository& allDiscipline;

public:

	undoForAdd(const Disciplina & disciplinaAdaugata, Repository & allDiscipline) : disciplinaAdaugata{ disciplinaAdaugata }, allDiscipline{ allDiscipline } {}

	void undo() override;
};

class undoForDelete : public Undo {
private:
	Disciplina disciplinaStearsa;
	Repository& allDiscipline;

public:

	undoForDelete(const Disciplina & disciplinaStearsa, Repository & allDiscipline) : disciplinaStearsa{ disciplinaStearsa }, allDiscipline{ allDiscipline } {}

	void undo() override;

};
class undoForUpdate : public Undo {
private:
	Disciplina disciplinaVeche, disciplinaNoua;
	Repository& allDiscipline;

public:

	undoForUpdate(const Disciplina& disciplinaVeche, const Disciplina&  disciplinaNoua, Repository & allDiscipline) : disciplinaVeche{ disciplinaVeche }, disciplinaNoua{ disciplinaNoua }, allDiscipline{ allDiscipline } {}

	void undo() override;

};
