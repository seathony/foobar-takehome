defmodule FoobarWeb.PageController do
  use FoobarWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end

  def fizzbuzz(conn, _params) do

#    determine between foo or bar
    isFoobar = fn (arg) ->
      cond do
        arg["foo"] == "true" && arg["bar"] == "true" -> "foobar"
        arg["foo"] == "true" -> "foo"
        arg["bar"] == "true" -> "bar"
       end
    end

    json(conn, %{message: isFoobar.(_params)})
  end
end
