using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IUserRepository
    {
        Task<User> Authenticate(string userName, string password);
        void Register(string userName, string password,string Email,int Mobile);

        Task<bool> UserAlreadyExist(string userName);
        Task<User> GetUser(string userName);

    }
}