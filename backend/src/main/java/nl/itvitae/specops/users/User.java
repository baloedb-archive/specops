package nl.itvitae.specops.users;

import jakarta.persistence.*;
import java.util.UUID;
import lombok.*;

@Getter
@Setter
@Entity(name = "users")
@RequiredArgsConstructor
@NoArgsConstructor
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.UUID)
  private UUID id;

  @NonNull private String username;

  @NonNull private String password;

  @NonNull private String employeeName;
}
