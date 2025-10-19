Rails.application.configure do
  config.lograge.enabled = true

  config.lograge.custom_payload do |controller|
    {
      request_id: controller.request.request_id,
      timestamp: Time.zone.now
    }
  end
end
