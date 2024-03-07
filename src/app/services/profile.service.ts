import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
      email: 'rafaeleliasgri@alumni.usp.br',
      name: 'Rafael Elias Grigolo',
      whatsApp: 'wa.link/dophbv',
      linkedIn: 'https://www.linkedin.com/in/rafaeleliasgri/'
    }

    return profile;
  }
}
