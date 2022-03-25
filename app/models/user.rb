class User < ApplicationRecord
    has_secure_password
    has_many :characters
    has_many :encounters

    validates :username, uniqueness: true
end
