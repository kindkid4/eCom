using System;
using System.Diagnostics;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dc;

        public UserRepository(DataContext dc)
        {
            this.dc = dc;
        }
        //CHECK IF USER EXIST AND ENTERD CORRECT INFO
        public async Task<User> Authenticate(string userName, string passwordText)
        {
            //CHECK IF USER EXIST
            var user = await dc.Users.FirstOrDefaultAsync(x => x.Username == userName);
            if (user == null || user.PasswordKey == null)
                return null;
            if (!MatchPasswordHash(passwordText, user.Password, user.PasswordKey))
                return null;
            return user;
        }
        //CHECK IF PASSWORD MATCHED WITH ENTERED ONE
        private bool MatchPasswordHash(string passwordText, byte[] password, byte[] passwordKey)
        {
            //GENERATE THE HASH CODE
            using (var hmac = new HMACSHA512(passwordKey))
            {
                var passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(passwordText));
                for (int i = 0; i < passwordHash.Length; i++)
                {
                    if (passwordHash[i] != password[i])
                        return false;
                }
            }
            return true;
        }

        public void Register(string userName, string password, string Email, string Mobile)
        {
            byte[] passwordHash, passwordKey;
            //GENERATE THE HASH CODE
            using (var hmac = new HMACSHA512())
            {
                passwordKey = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }

            User user = new User();
            user.Username = userName;
            user.Mobile = Mobile;
            user.Email = Email;
            user.Tara = "";
            user.Judet = "";
            user.Oras = "";
            user.Numar = 0;
            user.Pfp = "https://www.w3schools.com/howto/img_avatar.png";
            user.Password = passwordHash;
            user.PasswordKey = passwordKey;
            dc.Users.Add(user);
        }

        public async Task<bool> UserAlreadyExist(string userName)
        {
            return await dc.Users.AnyAsync(x => x.Username == userName);
        }
        public async Task<User> GetUser(string userName)
        {
            var users = await dc.Users.ToListAsync();
            foreach (User user in users)
            {
                if (user.Username == userName)
                    return user;
            }
            return null;
        }
    }
}