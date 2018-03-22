class Api::ContactsController < ApplicationController

  def create
   @contact = Contact.new(params[:contact][:data])
   name = params[:contact][:data][:name]
   message = "Thank you for your Email, " + name.capitalize + ". I will get back to you shortly!"
   @contact.request = request
   if @contact.deliver
     render json: {message: message}
   else
     render json: {message: "Error occured. Please try again!"}
   end
 end

end
