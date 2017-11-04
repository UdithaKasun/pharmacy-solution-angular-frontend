import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {

  getToken(): String {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ZmMyNTIzNTQyYWUzODAyNmQ3ZTEzYyIsInVzZXJuYW1lIjoicGFzaW5kdSIsImV4cCI6MTUxNDkyMTMxMywiaWF0IjoxNTA5NzM3MzEzfQ.QvJtLslKj7ASp-O1fSW-QwIax448k3VrNZau9Tm6-uE";
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

}
