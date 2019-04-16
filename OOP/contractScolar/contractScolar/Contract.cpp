#include"Contract.h"
#include<assert.h>

void Contract::adaugareContract(const Disciplina& disciplina)
{
	contractDiscipline.push_back(disciplina);
	notify();
}

void Contract::golesteContract()
{
	contractDiscipline.clear();
	notify();
}
void Contract::stergeDinContract(const Disciplina& disciplina)
{
//verificam daca disciplina exista deja
auto gasit = find_if(contractDiscipline.begin(), contractDiscipline.end(), [disciplina](const Disciplina& element) {
	return element.getDenumire() == disciplina.getDenumire();
});
if (gasit == contractDiscipline.end())
{
	throw contractException{ "Disciplina nu exista " };
}
//daca exista o stergem
contractDiscipline.erase(gasit);
}
void Contract::umpleContract(int numar)
{	
	int seed = std::chrono::system_clock::now().time_since_epoch().count();
	vector<Disciplina> all = repository.getElemente();
	shuffle(all.begin(), all.end(), default_random_engine(seed));
	while (contractDiscipline.size() < numar && all.size()>0)
	{
		contractDiscipline.push_back(all.back());
		all.pop_back();
	}
	notify();
}

void testContract()
{
	Repository repository;
	Contract all{ repository };
	all.adaugareContract(Disciplina("mate", 6, "real", "Gorcea"));
	assert(all.getContract().size() == 1);
	all.golesteContract();
	assert(all.getContract().size() == 0);

}