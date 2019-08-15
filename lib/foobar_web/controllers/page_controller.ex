defmodule FoobarWeb.PageController do
  use FoobarWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

#  call functions per instructions
  def fooBarFunction() do "foobar" end
  def fooFunction() do "foo" end
  def barFunction() do "bar" end

  def fizzbuzz(conn, _params) do

#    determine between foo or bar
    isFoobar = fn (arg) ->
      cond do
        arg["foo"] == "true" && arg["bar"] == "true" -> fooBarFunction()
        arg["foo"] == "true" -> fooFunction()
        arg["bar"] == "true" -> barFunction()
        true -> "not foo or bar"
       end
    end

    json(conn, %{message: isFoobar.(_params)})
  end
end
