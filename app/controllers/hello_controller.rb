class HelloController < ApplicationController
  def index
    Yabeda.top_shop.index_page_opened.increment
    # поход в платёжную систему
    # if perf_test?
    #   sleep 5
    # esle
    #   go_to_payment_gateway
    # end
    render plain: "Главная страница"
  end

  def refresh_online
    users_online_count = rand(100..1000)
    Yabeda.top_shop.user_online.set({}, users_online_count)
    render plain: "#{users_online_count} users online now"
  end

  def seed_everything
    GenerateEverythingJob.perform_now
    render plain: "Done!"
  end
end
