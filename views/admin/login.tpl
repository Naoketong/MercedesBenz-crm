{% extends './../layout.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/login.css"/>
{% endblock %}


{% block content %}
<div class="wrapper">
  <div class="form-section">
    <!-- <div class="form-title">管理系统后台登录</div> -->
    <img class="form-title" src="https://www.mercedes-benz.com.cn/content/dam/mb-cn/footer/mercedes-benz-logo-desktop.png">
    <div class="form-item">
      <input id="userPhone" type="text" class="form-input" placeholder="你的手机"/>
    </div>
    <div class="form-item">
      <input id="userPassword"  type="text" class="form-input" placeholder="你的密码"/>
    </div>
    <div class="form-item">
      <button id="userSubmit" class="form-button">内部人员登录</button>
    </div>
  </div>
</div>

{% endblock %}


{% block js %}
<script src="/javascripts/jquery-3.3.1.min.js"></script>
<script src="/javascripts/login.js"></script>
{% endblock %}