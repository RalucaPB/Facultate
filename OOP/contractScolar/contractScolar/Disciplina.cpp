#include<assert.h>
#include"Disciplina.h"


void testDisciplina() {
	Disciplina disciplina("Matematica", 6, "obligatorie", "Gorcea");
	assert(disciplina.getDenumire() == "Matematica");
	assert(disciplina.getNumarOre() == 6);
	assert(disciplina.getTip() == "obligatorie");
	assert(disciplina.getCadruDidactic() == "Gorcea");
	

}