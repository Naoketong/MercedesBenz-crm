<!-- <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{title}}</title>
    <!-- <link rel="stylesheet" href="/stylesheets/reset.css"/> -->
    <link rel="stylesheet" href="/stylesheets/admin.css"/>
    {% block css %}
    {% endblock %}
</head>
<body>
  <div class="wrapper">
    <header class="page-header">
      <img class="page-header-img" src="https://www.mercedes-benz.com.cn/content/dam/mb-cn/footer/mercedes-benz-logo-desktop.png">
      <!-- <div class="head-name">林熙</div> -->
      {% if userInfo.role == 1 %}
      <span class="head-name" value="{{userInfo.role}}">{{userInfo.name}},您好！管理员</span>
      {% else %}
      <span class="head-name" value="{{userInfo.role}}">{{userInfo.name}},您好，欢迎您</span>
      {% endif %}
      <a href="/admin/outlogin" id="head-quit">退出</a>
    </header>
    <div class="page-body">
      <div class="page-aside">
        <nav class="page-nav">
          <ul>
            {% if userInfo.role == 1 %}
            <li><a class="page-nav-item" href="/admin/user">人员管理</a></li>
            {% endif %}
            <li><a class="page-nav-item" href="/admin/clue">线索管理</a></li>
          </ul>
        </nav>
      </div>
      <div class="page-content">
        {% block content %}
        {% endblock %}
      </div>
    </div>
    <footer class="page-footer">Copyright © 2019 极客学院体验技术部出品</footer>
  </div>

  {% block js %}

{% endblock %}  
</body>
</html> -->