class Contact < ApplicationRecord
  validates :name, :email, :message, presence: true
  # validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i

 # def headers
 #   {
 #   :subject => 'Contact Inquiry',
 #   :to => ENV['GMAIL_USERNAME'],
 #   :from => %('#{name}' <#{email}>)
 #   }
 # end
end
