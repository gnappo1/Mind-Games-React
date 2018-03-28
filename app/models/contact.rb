class Contact < ApplicationRecord
  validates :name, :email, :message, presence: true
  validates_format_of :email, :with => /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i

 # def headers
 #   {
 #   :subject => 'Contact Inquiry',
 #   :to => ENV['GMAIL_USERNAME'],
 #   :from => %('#{name}' <#{email}>)
 #   }
 # end
end
