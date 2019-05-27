{% extends './layout.tpl' %}

{% block css %}
<link rel="stylesheet" href="/stylesheets/index.css"/>
{% endblock %}

{% block content %}
<div class="wrapper">
	<div class="header"><img class="head-logo" src="https://www.mercedes-benz.com.cn/content/dam/mb-cn/footer/mercedes-benz-logo-desktop.png"></div>
  <div class="form-section">
    <h2 class="form-title">留下电话，我们会马上联系你，为你预约优惠名额</h2>
    <div class="form-item">
      <input id="userName" type="text" class="form-input" placeholder="你的姓名"/>
    </div>
    <div class="form-item">
      <input id="userPhone" type="text" class="form-input" placeholder="你的电话"/>
    </div>
    <div class="form-item">
      <button id="userSubmit" class="form-button">马上抢占名额</button>
    </div>
  </div>
</div>
{% endblock %}

{% block js %}
  <script src="/javascripts/jquery-3.3.1.min.js"></script>
  <script src="/javascripts/index.js"></script>
{% endblock %}