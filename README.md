# uri

Simple uri manipulation tool



### Uri(String uri)

创建一个Uri

```
var u = new Uri("http://example.com:5000/user?name=alex&age=10");

u.protocol // http
u.host // example.com
u.pathname // /user
u.query // name=alex&age=10
u.port // 5000
```

如果不传入uri参数，则以当前的访问路径为准，例如我在浏览器中的访问路径为 `https://google.com/search`

```
var u = new Uri();
u.str(); // https://google.com/search
```

## Methods 方法

### params(Object obj)

设置参数

```
var u = new Uri("http://example.com?name=alex");
u.params({'name': 'mary'}).str() //http://example.com?name=mary
u.params({ 'email': 'test@example.com', 'sex': 'female' }).str(); // http://example.com?name=mary&email=test@example.com&sex=female


### path(String pathname)

修改path , 使用绝对路径和相对路径都可以

```
var u = new Uri("http://example.com/index");
u.path('/new/path').str(); // http://example.com/new/path
u.path('../test').str();   // http://example.com/new/test

```


### 全局配置

通过配置params, 可以让每个连接都带上这些配置好的全局参数

```
Uri.config({
    params: {
        "company": "ex"
    }
});

var u = new Uri("http://example.com");
u.str(); //http://example.com?company=ex;

```