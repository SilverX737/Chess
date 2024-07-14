import { WebSocket } from 'ws';

export class GameManager {
    private games: Game[];
    private pendingGameId: string | null;
    private users: User[];
  
    constructor() {
      this.games = [];
      this.pendingGameId = null;
      this.users = [];
    }
  
    addUser(user: User) {
      this.users.push(user);
      this.addHandler(user);
    }
  
    removeUser(socket: WebSocket) {
      const user = this.users.find((user) => user.socket === socket);
      if (!user) {
        console.error('User not found?');
        return;
      }
      this.users = this.users.filter((user) => user.socket !== socket);
      socketManager.removeUser(user);
    }
  
    removeGame(gameId: string) {
      this.games = this.games.filter((g) => g.gameId !== gameId);
    }
}