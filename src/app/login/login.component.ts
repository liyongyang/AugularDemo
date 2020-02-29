import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";
import * as $ from "jquery";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  toReg() {
    $("#log-wrap").css("display", "none");
    $("#reg-wrap").css("display", "block");
  }
  toLog() {
    $("#reg-wrap").css("display", "none");
    $("#log-wrap").css("display", "block");
  }

  login() {
    var name = $(".log_uerName").val();
    var code = $(".log_userPwd").val();
    if (name === "" || code === "") {
      alert("请填写完整信息");
      return;
    }
    var sendata = {
      username: name,
      password: code
    };
    $.ajax({
      url: "http://localhost:8080/user/login",
      dataType: "json",
      type: "post",
      contentType: "application/json",
      data: JSON.stringify(sendata),
      success: function(data) {
        console.log(sendata);
        console.log(data);
        // this.storage.setItem("userInfo", data);

        // var todolist = this.storage.getItem("userInfo");
        // console.log(todolist);
        // localStorage.setItem("aa", JSON.stringify(username));
        if (data.status === 200) {
          window.location.href = "/index.html";
        } else {
        }
      }
    });
  }
  register() {
    var name = $(".reg_username").val();
    var code = $(".reg_password").val();
    var phone = $(".reg_phone").val();
    // var Intphone = parseInt(phone);
    if (name === "" || phone === "" || code === "") {
      alert("请填写完整信息");
      return;
    }
    var sendata = {
      username: name,
      phone: phone,
      password: code
    };
    $.ajax({
      url: "http://localhost:8080/user/register",
      dataType: "json",
      type: "post",
      contentType: "application/json",
      data: JSON.stringify(sendata),
      success: function(data) {
        console.log(typeof phone);
        console.log(sendata);
        console.log(data);
        if (data.status === 200) {
          window.location.href = "/index.html";
        } else {
        }
      }
    });
  }
  // private storage:StorageService 依赖注入服务
  constructor(private storage: StorageService) {}
  ngOnInit() {}
}
