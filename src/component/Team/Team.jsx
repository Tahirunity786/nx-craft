'use client'
import Link from 'next/link';
import styles from './Team.module.css';

const people = [
  { id: 1, name: 'Person 1', image: 'https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png' },
  { id: 2, name: 'Person 2', image: 'https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png' },
  { id: 3, name: 'Person 3', image: 'https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png' },
  { id: 4, name: 'Person 4', image: 'https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png' },
  { id: 5, name: 'Person 5', image: 'https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png' },
  { id: 6, name: 'Person 6', image: 'https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png' },
  { id: 7, name: 'Person 7', image: 'https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png' },
  { id: 8, name: 'Person 8', image: 'https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png' },
  { id: 9, name: 'Person 9', image: 'https://res.cloudinary.com/dx9xdlbae/image/upload/v1731325427/bojhcktq7c268xsubiko.png' },
];

const Team = () => {
  return (
    <div className={styles.grid}>
    {people.map((person) => (
      <div key={person.id} className={styles.card}>
        <div className={styles.cover}>
          <Link href={`/profile/${'#'}`}>
            Profile
          </Link>
        </div>
        <img src={person.image} alt={person.name} className={styles.image} />
      </div>
    ))}
  </div>
  
  );
};

export default Team;