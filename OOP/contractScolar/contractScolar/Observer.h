#pragma once
/*
Clasa abstracta
Metoda de update trebuie implementata de observer
*/

class Observer {
public:
	virtual void update() = 0;
};

#include<vector>
#include<algorithm>

using namespace std;

class Observable {
private:
	vector<Observer*> observers;
public:
	void addObserver(Observer *observer) {
		observers.push_back(observer);
	}

	void removeObserver(Observer *observer) {
		observers.erase(remove(observers.begin(), observers.end(), observer), observers.end());
	}

	void notify() {
		for (auto observer : observers) {
			observer->update();
		}
	}
};