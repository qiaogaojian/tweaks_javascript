let user = {
    name: "John Smith",
    age: 35
};

console.log(JSON.stringify(user));

let json = "{\n" +
    "  \"sites\": {\n" +
    "    \"site\": [\n" +
    "      {\n" +
    "        \"id\": \"1\",\n" +
    "        \"name\": \"菜鸟教程\",\n" +
    "        \"url\": \"www.runoob.com\"\n" +
    "      },\n" +
    "      {\n" +
    "        \"id\": \"2\",\n" +
    "        \"name\": \"菜鸟工具\",\n" +
    "        \"url\": \"c.runoob.com\"\n" +
    "      },\n" +
    "      {\n" +
    "        \"id\": \"3\",\n" +
    "        \"name\": \"Google\",\n" +
    "        \"url\": \"www.google.com\"\n" +
    "      }\n" +
    "    ]\n" +
    "  }\n" +
    "}";
let jObject = JSON.parse(json);
console.log(jObject["sites"]["site"][2]["name"]);