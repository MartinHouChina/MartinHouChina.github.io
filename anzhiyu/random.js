var posts=["2022/09/29/南京大学计算机选拔题试做/","2022/01/19/Atcoder Beginner Contest 263/","2023/09/30/DQN 介绍/","2022/01/13/牛客小白月赛43题解/","2023/09/08/线性规划问题/","2022/08/19/牛客小白月赛55题解/","2024/05/01/迟到了 3 个月的 paper/","2023/09/29/Linux Neovim 配置/","2024/05/01/Vue Axios 发送请求/","2024/05/06/XML学习笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };