package main

import "testing"

func TestSum(t* testing.T) {
	total := Sum(4, 3)

	if total != 7 {
		t.Error("Wrong result: Result %d. Expected: %d", total, 7)
	}
}