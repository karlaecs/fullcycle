package main

import "testing"

func TestSum(t* testing.T) {
	total := Sum(4, 3)

	if total != 7 {
		t.Errorf("Wrong result: Result %d. Expected: %d", total, 7)
	}
}