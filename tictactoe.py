import tkinter as tk
from tkinter import messagebox

window = tk.Tk()
window.title("Tic Tac Toe")

def create_board():
    for i in range(3):
        for j in range(3):
            button = tk.Button(window, text="", font=("Comic Sans MS",50),
                               height=2,width=6,bg="lightblue", command=lambda row=i, col=j: handle_click(row,col))
            button.grid(row=i, column=j, sticky="nsew")

create_board()

def handle_click(row,col):
    pass

window.mainloop()
