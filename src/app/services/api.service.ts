import {Injectable} from "@angular/core";
import {GlobalVariableService} from "./global-variable.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private gvs: GlobalVariableService,
    private http: HttpClient
  ) {
  }

//admins-------------------------------------------------------------------------------------------------------------
  getAdmins() {
    return this.http.get(this.gvs.admin)

  }

  getAdmin(adminId: any) {
    return this.http.get(this.gvs.admin + '/' + adminId)

  }

//products------------------------------------------------------------------------------------------------------
  getProducts() {
    return this.http.get(this.gvs.protects)
  }

  getProduct(productId: any) {
    return this.http.get(this.gvs.protects + '/' + productId)
  }

//users------------------------------------------------------------------------------
  getUsers() {
    return this.http.get(this.gvs.users)
  }

  getUser(userId: any) {
    return this.http.get(`${this.gvs.users}/${userId}`);
  }

  searchUser(text: string) {
    return this.http.get(`${this.gvs.users}/search?text=${text}`);
  }
//=========================================================================================
}
