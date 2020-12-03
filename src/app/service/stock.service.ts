import { Injectable } from '@angular/core';
// const algotrader = require('algotrader');

@Injectable({
  providedIn: 'root'
})
export class StockService {


  constructor() {
    // const Robinhood = algotrader.Robinhood;
    // const User = Robinhood.User

    // const options = {
    //   doNotSaveToDisk: false, // If the `save` method should not store the user login info to disk (file)
    //   serializedUserFile: null // File to where the serialized user login info can be saved
    // };

    // const myUser = new User("chaoyu.bupter@gmail.com", "qqfan151252012", options);
    // myUser.authenticate()
    // .then(() => {
    //     // User was authenticated
    // })
    // .catch((error: any) => {
    //   console.log(error)
    //     // Either the request failed, or Robinhood responded with an error.
    //     // (Ex: you don't have internet access or your user credentials were incorrect)
    // })
  }

  public quote() : string {
    console.log("SUCCESS")
    return "SUCCESS";
  }
}
