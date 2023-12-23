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

board = [[0,0,0],[0,0,0],[0,0,0]]
current_player = 1

def handle_click(row,col):
    global current_player

    if board[row][col] == 0:
        if current_player == 1:
            board[row][col] = "X"
            current_player = 2
        else:
            board[row][col] = "O"
            current_player = 1

        button = window.grid_slaves(row = row, column = col)[0]
        button.config(text=board[row][col])

        check_for_winner()

def check_for_winner():
    winner = None

    for row in board:
        if row.count(row[0]) == len(row) and row[0] != 0:
            winner = row[0]
            break
    
    for col in range(len(board)):
        if board[0][col] == board[1][col] == board[2][col] and board[0][col] != 0:
            winner = board[0][col]
            break

    if all([all(row) for row in board]) and winner is None:
        winner = "tie"

    if winner:
        declare_winner(winner)

def declare_winner(winner):
    if winner == "tie":
        message = "It is a tie!"
    else:
        message = f"Player {winner} wins!"
    answer = messagebox.showinfo("Game Over", message)

window.mainloop()
